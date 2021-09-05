// Check and log out permissions defined in run.sh
const netPerm = { name: "net" } as const;
const netPermLocal = { name: "net", host: "localhost:8080" } as const;
const readPerm = { name: "read" } as const;
const writePerm = { name: "write" } as const;

// deno-lint-ignore no-explicit-any
export const logOutPermissions: any = async() => {
    console.log(`Permission: ${netPerm.name} - `, await Deno.permissions.query(netPerm));
    console.log(`Permission: ${netPermLocal.name} - `, await Deno.permissions.query(netPermLocal));
    console.log(`Permission: ${readPerm.name} - `, await Deno.permissions.query(readPerm));
    console.log(`Permission: ${writePerm.name} - `, await Deno.permissions.query(writePerm));
}
