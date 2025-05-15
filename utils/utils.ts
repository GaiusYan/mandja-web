

export const getInitials = (name : string) : string | null => {

    if (!name) return null;

    const words = name.trim().split(/\s+/);

    const firstTwo = words.slice(0,2);

    return firstTwo.map(word => word[0].toUpperCase()).join('');

}