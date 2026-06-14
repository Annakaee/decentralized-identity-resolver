export async function resolveDID(did: string): Promise<{ document: any }> {
    // Mock implementation for MVP
    return {
        document: {
            id: did,
            authentication: [{ type: "Ed25519SignatureAuthentication2018" }]
        }
    };
}
