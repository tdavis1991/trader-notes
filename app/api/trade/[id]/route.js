import { connectToDB } from "@/utils/database";
import Trade from "@/app/(models)/Trade";

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    console.log("server", params);
    const trade = await Trade.findById(params.id);

    if (!trade) return new Response("Trade not founded", { status: 404 });

    return new Response(JSON.stringify(trade), { status: 200 });
  } catch (error) {
    return new Response(`Server error: ${error}`, { status: 500 });
  }
};
