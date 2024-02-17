import { connectToDB } from "@/utils/database";
import Trade from "@/app/(models)/Trade";

export const POST = async (req) => {
  try {
    connectToDB();

    const body = await req.json();
    const newTrade = body.formData;
    await Trade.create(newTrade);

    return new Response(JSON.stringify(newTrade), {
      status: 201,
      message: "Trade created successfully!",
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ status: 500, message: "Server error" })
    );
  }
};
