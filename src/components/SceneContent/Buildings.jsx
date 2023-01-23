import Building from "./Building"

function Buildings() {
    return (
        <> 
            <Building position={[-10, 0.1, -5]} />
            <Building position={[-10, 0.1, -15]} />

            <Building position={[-10, 0.1, 5]} />
            <Building position={[-10, 0.1, 15]} />

            <Building position={[0, 0.1, -5]} />
            <Building position={[0, 0.1, 5]} />
        </>
    )
}

export default Buildings