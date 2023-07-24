const ContentLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="pt-10">{children}</div>
}

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen justify-between bg-white">
            <div>
                <div className="md:container md:mx-auto px-4">
                    <ContentLayout>{children}</ContentLayout>
                </div>
            </div>
        </div>
    )
}
