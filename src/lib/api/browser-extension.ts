import type { ExtensionFeedback } from "./api";
import saveFeedbackInSheet from "./save-to-spreadsheet";

export const submitFeedback = async (body: ExtensionFeedback) => {
  const isSavedInSheet = await saveFeedbackInSheet({
    sheetTitle: "Extension - Raw Feedback",
    data: [new Date(), body.browser, body.feedback, body.note],
  });

  const statusCode = isSavedInSheet ? 201 : 500;
  return {
    statusCode,
    body: statusCode === 201 ? "Feedback added" : "Oh no, something failed.",
  };
};
