const IFrame = () => {
    return (
        <iframe
            src="https://www.youtube.com/embed/2eA3yWcqajU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-3xl w-full h-64 md:h-96 max-w-4xl mx-auto" />
    )
}

export default IFrame