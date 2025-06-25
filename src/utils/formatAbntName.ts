export const formatAbntName = (name: string) => {
    const lastName = name.split(" ").pop();
    const firstName = name.split(" ").slice(0, -1).join(" ");
    return `${lastName?.toUpperCase()}, ${firstName}`;    
}