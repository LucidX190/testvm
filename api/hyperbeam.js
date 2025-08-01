const Hyperbeam = require('hyperbeam');

export default async function handler(req, res) {
  const hb = await Hyperbeam(process.env.HB_API_KEY);
  const browser = await hb.new();
  res.status(200).json({ url: browser.url });
}
