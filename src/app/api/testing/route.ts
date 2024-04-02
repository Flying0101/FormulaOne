export async function GET() {
  const res = await fetch("http://ergast.com/api/f1/2021/drivers.json");
  const driverData = await res;
  console.log(driverData);
  return Response.json(driverData);
}
