export * from './ensResolver';
export * from './stellarFederationResolver';
export * from './didResolver';
export async function resolveIdentity(address: string) { return { address, resolved: true }; }
