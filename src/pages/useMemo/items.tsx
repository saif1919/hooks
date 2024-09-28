export const initialItems = new Array(30000000).fill(0).map((_,i) => {
    return {
        id : i,
        isSelected: i === 29999999
    };
    });