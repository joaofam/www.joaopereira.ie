'use client';

import GridPattern from '@/app/components/magicui/grid-pattern';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { cn } from '@/lib/utils';

export const Resume = () => {
    return (
        <Card className="relative flex h-full w-full items-center justify-center">
            <CardContent className="relative z-10 h-full w-full">
                <div className="flex grid h-full grid-cols-3 items-center justify-center">
                    <div className="col-span-2 mr-12 flex justify-center">
                        <h3 className="text-center">
                            While you are here check out my resume
                        </h3>
                    </div>
                    <div className="flex h-full items-center justify-center border-l-1 border-secondary">
                        <Button variant="outline">Resume</Button>
                    </div>
                </div>
            </CardContent>
            <div className="absolute left-2/3 top-0 h-full w-px bg-secondary"></div>
            <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className={cn(
                    '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]'
                )}
            />
        </Card>
    );
};
