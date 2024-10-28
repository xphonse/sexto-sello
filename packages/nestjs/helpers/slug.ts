interface Sluggeable {
    page: string
    title: string
}

export const getSlug = (sluggeable: Sluggeable) => {
    const {page, title} = sluggeable
    const normalizedTitle = title
        .replace(/[\u0300-\u036f]/g, "")
        .normalize("NFD") //Remove diacritics
        .replace(/[^a-zA-Z ]/g, "") //Remove signs
        .trim()
        .replace(/\s+/g, ' ') //Remove duplicated spaces
        .replace(/ /g, "-") //Replace spaces with hyphens
        .toLowerCase()
    return `${page}-${normalizedTitle}`
}
