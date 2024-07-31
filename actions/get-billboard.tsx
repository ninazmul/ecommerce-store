import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error fetching billboards: ${errorText}`);
  }

  return res.json();
};

export default getBillboards;
