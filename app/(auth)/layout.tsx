
const AuthLayout = ({ children }:{children: React.ReactNode}) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-full mt-10 md:mt-52">
            {children}
        </div>
    )
}

export default AuthLayout;