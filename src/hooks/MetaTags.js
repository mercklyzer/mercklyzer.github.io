import React from "react"
import Helmet from "react-helmet"

const MetaTags = () => {
    return (
        <Helmet>
            <meta property="og:title" content="Lyzer Bautista | Portfolio" />
            <meta property="og:url" content="https://lyzerbautista.com" />
            <meta property="og:description" content="A passionate web developer from the Philippines." />
            <meta property="og:image" content="/assets/seo-banner.png" />
            <meta property="og:type" content="website" /> 

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Lyzer Bautista | Portfolio" />
            <meta name="twitter:url" content="https://lyzerbautista.com" />
            <meta name="twitter:description" content="A passionate web developer from the Philippines." />
            <meta name="twitter:image:src" content="/assets/seo-banner.png" /> 
        </Helmet>
    )
}

export default MetaTags

