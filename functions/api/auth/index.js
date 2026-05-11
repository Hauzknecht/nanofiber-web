export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider');

  if (provider !== 'github') {
    return new Response('Unknown provider', { status: 400 });
  }

  const clientId     = env.GITHUB_CLIENT_ID;
  const redirectUri  = `${url.origin}/api/auth/callback`;
  const scope        = 'repo,user';
  const state        = crypto.randomUUID();

  const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
  githubAuthUrl.searchParams.set('client_id',    clientId);
  githubAuthUrl.searchParams.set('redirect_uri',  redirectUri);
  githubAuthUrl.searchParams.set('scope',         scope);
  githubAuthUrl.searchParams.set('state',         state);

  return Response.redirect(githubAuthUrl.toString(), 302);
}
