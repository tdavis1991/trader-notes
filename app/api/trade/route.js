import { connectToDB } from "@/utils/database";
import Trade from "@/app/(models)/Trade";

export const GET = async () => {
  try {
    connectToDB();

    const trades = await Trade.find();

    return new Response(JSON.stringify({ trades }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ status: 500, message: "Server error" })
    );
  }
};
