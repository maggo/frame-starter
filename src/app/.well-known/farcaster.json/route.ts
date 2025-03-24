export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    frame: {
      version: "1",
      name: "Frames v2 Demo",
      iconUrl: `${appUrl}/frame/splash-image.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frame/frame-image.png`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/frame/splash-image.png`,
      splashBackgroundColor: "#ffffff",
      //webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
