function isInFind(name: string, find: string) {
    const inFind = name.toUpperCase().includes(find.toUpperCase())
    
    return inFind
}

export default isInFind