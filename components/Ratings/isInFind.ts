function isInFind(date: string, find: string) {
    const inFind = date.toUpperCase().includes(find.toUpperCase())
    
    return inFind
}

export default isInFind