import Button from "../components/Button/Button";
// import { useState } from "react";

export default {
    title: "Buttons/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text"
        },
        primary: {
            control: "boolean"
        },
        color: {
            control: "color"
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"]
        },
    }
};

// variations

export const Primary = {
    args: {
        label: "Primary",
        primary: false,
        color: "white",
        size: "md",
    }
}

export const Secondary = {
    args: {
        label: "Secondary",
        primary: true,
        color: "white",
        size: "md",
    }
}

export const Small = {
    args: {
        ...Primary.args,
        size: "sm"
    }
}

export const Large = {
    args: {
        ...Primary.args,
        size: "lg"
    }
}

// const ButtonWithHooks = () => {
//     const [primary, setPrimary] = useState(false);
    
//     const handleChange = () => {
//         setPrimary(!primary);
//     }

//     return (
//         <Button primary={primary} handleClick={handleChange} />
//     )
// }

// export const Primary = {
//     name: "Primary with hooks",
//     render: () => <ButtonWithHooks />
// };