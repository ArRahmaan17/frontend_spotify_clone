function navBarClassName(activeLibrary, expandLibrary) {
    return activeLibrary && expandLibrary
        ? "max-w-md"
        : activeLibrary && !expandLibrary
            ? "max-w-60"
            : "max-w-20"
}
export { navBarClassName };