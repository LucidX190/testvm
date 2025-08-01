import Hyperbeam from 'hyperbeam';

export default async function handler(req, res) {
  try {
    const hb = await Hyperbeam(process.env.HB_API_KEY);
    const browser = await hb.new();
    res.status(200).json({ url: browser.url });
  } catch (e) {
    console.error(e);
    res.status(500).send('Something broke');
  }
}
