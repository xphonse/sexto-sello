interface Sluggeable {
    page: string,
    title: string
}

export const getSlug = (sluggeable: Sluggeable) => {
    const normalizedTitle = sluggeable.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return `${sluggeable.page}-${normalizedTitle.toLowerCase().replace(/ /g, "-")}`
}

export const getPageFromSlug = (slug: string) => {
    const [page] = slug.split("-")
    return page
}