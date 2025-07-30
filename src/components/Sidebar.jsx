import PageNavigation from "./PageNavigation"
import SocialMediaNavigation from "./SocialMediaNavigation"

export default function Sidebar() {
    return (
        <>
            <nav className="sidebar main-element">
                <PageNavigation />
                <SocialMediaNavigation />
            </nav>
        </>
    )
}