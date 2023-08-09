import NavigationBar from "../components/NavigationBar/NavigationBar";

export default {
    title: "Nav/NavigationBar",
    component: NavigationBar,
    tags: ["autodocs"]
};

export const LoggedIn = {
    args: {
        isLoggedIn: true,
        theme: "dark"
    }
}

export const LoggedOut = {
    args: {
        isLoggedIn: false,
        theme: "light"
    }
}