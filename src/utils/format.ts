function formatPX(size: number | string): string {
    if (typeof size === 'number') {
        return size + 'px';
    } else if (typeof size === 'string' && size.endsWith('px')) {
        return size;
    } else {
        return size + 'px';
    }
}

export {
    formatPX
}