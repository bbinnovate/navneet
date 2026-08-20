import 'server-only'; import { cookies } from 'next/headers'; import { adminAuth } from './admin';
const name='ntt_admin_session';
export async function requireAdmin(){const token=(await cookies()).get(name)?.value;if(!token)throw new Error('UNAUTHORIZED');const decoded=await adminAuth.verifySessionCookie(token,true);if(!decoded.admin)throw new Error('FORBIDDEN');return decoded;}
export async function sessionCookie(idToken:string){const value=await adminAuth.createSessionCookie(idToken,{expiresIn:1000*60*60*12});return {name,value,httpOnly:true,sameSite:'lax' as const,secure:process.env.NODE_ENV==='production',path:'/',maxAge:60*60*12};}
export const clearSession={name,value:'',httpOnly:true,sameSite:'lax' as const,secure:process.env.NODE_ENV==='production',path:'/',maxAge:0};
