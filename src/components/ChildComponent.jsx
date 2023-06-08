import { useState } from "react";

export default function ChildComponent(prop){

    return (
        <div>
            <p>{prop.message}</p>
        </div>
    )
}
