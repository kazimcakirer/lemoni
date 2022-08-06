import MenuItem from "./MenuItem"

export default function MainMenu() {
    return (
        <nav className="space-x-10 h-full hidden lg:flex items-center justify-center">
            <MenuItem title="Home"/>
            <MenuItem title="Elements"/>
            <MenuItem title="Pages"/>
            <MenuItem title="Portfolio"/>
            <MenuItem title="Blog"/>
            <MenuItem title="Shop"/>
            <MenuItem title="Contact"/>
        </nav>
    );
}