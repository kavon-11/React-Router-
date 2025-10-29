import { Outlet } from "react-router-dom"
import MainNav from "../component/MainNav"
import classes from './Root.module.css'
export default function RootLayout(){
    return (
        <>
        <MainNav/>
        <main className={classes.content}>
        <Outlet/>
        </main>
        </>
    )
}