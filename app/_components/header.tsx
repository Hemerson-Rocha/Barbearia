"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
// import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    // const {data} = useSession();

    // const handleLoginClick = async () => {
    //     await signIn()
    // }

    return ( 
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center">
                <Image src='/logo.png' alt='barber' height={22} width={120} />
                <Button variant="outline" size='icon' className="h-8 w-8">
                    <MenuIcon size={18}/>
                </Button>
                
                {/* {data?.user ? (
                        <div className="">
                            <Button onClick={() => signOut()}>Logout</Button>
                            <h2>{data.user.name}</h2>
                        </div>
                    ) : (
                        <Button onClick={handleLoginClick}>login</Button>
                    )} */}
            </CardContent>
        </Card>
     );
}
 
export default Header;