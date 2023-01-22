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



// import { Box } from "@react-three/drei"

// function Buildings() {
//     return (
//         <>
//             <Box args={[15, 60, 10]} position={[35, 30, -15]}>
//                 <meshStandardMaterial color={'red'} />
//             </Box>

//             <Box args={[15, 60, 10]} position={[35, 30, -50]}>
//                 <meshStandardMaterial color={'red'} />
//             </Box>

//             <Box args={[15, 60, 10]} position={[0, 30, -15]}>
//                 <meshStandardMaterial color={'green'} />
//             </Box>

//             <Box args={[15, 60, 10]} position={[0, 30, 15]}>
//                 <meshStandardMaterial color={'green'} />
//             </Box>

//             <Box args={[15, 60, 10]} position={[-35, 30, -15]}>
//                 <meshStandardMaterial color={'red'} />
//             </Box>

//             <Box args={[15, 60, 10]} position={[-35, 30, -50]}>
//                 <meshStandardMaterial color={'red'} />
//             </Box>
//         </>
//     )
// }

// export default Buildings