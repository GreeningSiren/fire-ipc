export default function isAdmin(session) {
    if (session && session.user.id == "cd7e3c17-2a4f-4283-be06-0128f2fd057d") return true;
    return false;
}