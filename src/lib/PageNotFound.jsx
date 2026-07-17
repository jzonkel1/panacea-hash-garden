import { Link, useLocation } from 'react-router-dom';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-7xl font-display font-light text-primary/40">404</h1>
                    <div className="h-px w-16 bg-primary/30 mx-auto"></div>
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl font-display font-medium">Page Not Found</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {pageName ? <>The page <span className="text-foreground">"{pageName}"</span> doesn't exist.</> : "That page doesn't exist."}
                    </p>
                </div>
                <div className="pt-4">
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
