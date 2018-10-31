import React from "react"

import PrivateHeader from "./PrivateHeader"
import LinksListFilters from "./LinksListFilters"
import LinksList from "./LinksList"
import AddLink from "./AddLink"

const Link = () => {
    return (
        <div>
            <PrivateHeader title="Your Links" />
            <div className="page-content">
                <LinksListFilters />
                <AddLink />
                <LinksList />
            </div>
        </div>
    )
}

export default Link
