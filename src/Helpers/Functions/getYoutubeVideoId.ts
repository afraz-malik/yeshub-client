export const getYouTubeVideoId = (url: string): string | undefined => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    return match && match[2].length === 11
        ? `https://www.youtube.com/embed/${match[2]}`
        : undefined
}
