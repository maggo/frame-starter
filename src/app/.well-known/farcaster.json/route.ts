export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjEwMTc4LCJ0eXBlIjoiY3VzdG9keSIsImtleSI6IjB4NEM0YmUwODUxNGJGQTU1QjgwRjNjMzA1ZWM2MDg4NDk2MDQ0NjQ3MiJ9",
      payload: "eyJkb21haW4iOiJhd2Vzb21lLWZyYW1lLXN0YXJ0ZXIudmVyY2VsLmFwcCJ9",
      signature:
        "MHgyOGM2ZTAzMzMxZjJkOTVkNGIyNWU4YmZkMTIzOGQ0NGM1ODEyOTJhNTgyNTQ4NjhiYTYzZDhmZDJmNzI2NjEyMDRhNzEzOTQ4NzJkYzZjMGZkN2E0NGMyNzE4YjZiNmY3YWZmNGJlYjE0NzEyN2FmMzIxY2MxYjcxNWJkYWE5MzFj",
    },
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
