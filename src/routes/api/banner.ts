import type { RequestHandler } from "@sveltejs/kit";

const startDate = new Date("Aug 1 2022 00:00:00 EST");
const endDate = new Date("Aug 4 2022 10:00:00 EST");
export const get: RequestHandler = async () => {
  const currentDate = new Date();

  const display = startDate < currentDate && currentDate < endDate;

  return {
    status: 200,
    headers: { "content-type": "application/json" },
    body: { display, startDate, endDate },
  };
};
