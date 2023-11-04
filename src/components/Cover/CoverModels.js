import { Box, Button, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import CoverBase from "./CoverBase";
import { Canvas, useThree } from '@react-three/fiber';
import { AmbientLight } from 'three';
import { Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Flag } from "../Cover3D/Flag.tsx";
import { Basketball } from "../Cover3D/Basketball.tsx";
import { Football } from "../Cover3D/Football.tsx";
import { Tennis } from "../Cover3D/Tennis.tsx";
import { Volleyball } from "../Cover3D/Volleyball.tsx";
import { Cycling } from "../Cover3D/Cycling.tsx";
import { Weightlifting } from "../Cover3D/Weightlifting.tsx";
import { Logo } from "../Cover3D/Logo.tsx";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
    },

}));

const CoverModels = () => {
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    return (
        <Canvas className={classes.root}>
            <ambientLight />
            <pointLight position={[5, 5, 5]} intensity={200} />
            <pointLight position={[-3, -3, 2]} />
            <OrbitControls enableZoom={false} />

            {/* <Basketball position={[-1, 3, -3]} />
            <Football position={[3, 3, -3]} />
            <Tennis position={[-1, 0, -1]} />
            <Volleyball position={[3, 0, -1]} />
            <Cycling position={[-1, -1.5, 2]} />
            <Weightlifting position={[1.5, -2.5, 2.5]} /> */}
            
            <Float speed={1.2} rotationIntensity={1}>
                <Football position={[2, -2.5, -1]} />
                <Tennis position={[-2, 1.2, -1]} />
                <Cycling position={[1.5, 0, 1.5]} />
                <Weightlifting position={[-1, -2.5, 1]} />
            </Float>



            {/* <pointLight position={[2, 2, 4]} intensity={100} />
            <pointLight position={[2, 2, -4]} intensity={100} />
            <pointLight position={[-3, -3, 2]} />
            <pointLight position={[3, -3, 2]} />
            <pointLight position={[-3, 3, 2]} />
            <OrbitControls enableZoom={false} />
            <Float >
                <Logo position={[0, -1.5, 0]}/>
            </Float> */}
        </Canvas>
    )
}

export default CoverModels