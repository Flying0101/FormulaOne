export async function GET() {
  try {
    const res = await fetch("http://ergast.com/api/f1/2021/drivers.json");
    const driverData = await res;
    return Response.json(driverData);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}
