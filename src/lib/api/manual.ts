import saveFeedbackInSheet from "$lib/api/save-to-spreadsheet";
import sendFeedbackToSlack from "$lib/api/send-to-slack";
import type { Feedback } from "$lib/api/api";

const emotionSlackEmojiMap = {
  1: ":sob:",
  2: ":confused:",
  3: ":grinning:",
  4: ":star-struck:",
};

const feedbackTypetoSheetTitle = {
  docs: "Docs - Raw Feedback",
  guides: "Guides - Raw Feedback",
  digests: "Digests - Raw Feedback",
};

const allowedEmotions = [1, 2, 3, 4];

export const submitFeedback = async (body: Feedback) => {
  if (!allowedEmotions.includes(body.emotion)) {
    return {
      statusCode: 400,
      body: "Please provide a valid emotion",
    };
  }
  const hasURLPrefix = ["http://", "https://"].some((value) =>
    body.url.startsWith(value)
  );
  if (!hasURLPrefix) {
    return {
      statusCode: 400,
      body: "Please provide valid URL",
    };
  }
  const isSavedInSheet = await saveFeedbackInSheet({
    sheetTitle: feedbackTypetoSheetTitle[body.type],
    data: [new Date(), body.emotion, body.url, body.note, body.email],
  });
  const isSentToSlack = await sendFeedbackToSlack(`${
    body.type.charAt(0).toUpperCase() + body.type.slice(1)
  } feedback: ${emotionSlackEmojiMap[body.emotion]}
Link: ${body.url}
${body.email ? `Email: ${body.email}` : ""}
Note: ${body.note ? body.note : "N/A"}`);

  const statusCode = isSavedInSheet && isSentToSlack ? 201 : 500;
  return {
    statusCode,
    body: statusCode === 201 ? "Feedback added" : "Oh no, something failed.",
  };
};
