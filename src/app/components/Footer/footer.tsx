'use client';

import { CustomLink } from '@/app/components/Link/link';
import GridPattern from '@/app/components/magicui/grid-pattern';
import { Card, CardContent } from '@/app/components/ui/card';
import { cn } from '@/lib/utils';

export const Footer = () => {
    return (
        <Card className="relative flex h-full w-full border-l-0 border-r-0 px-32">
            <CardContent className="relative z-10 h-full w-full">
                <div className="flex grid h-full grid-cols-2">
                    <div className="col-span-1 py-16">
                        <h2>Fooooooooter</h2>
                        <p className="simple-p pt-4">
                            Thanks for visiting my portfolio
                        </p>
                        <p className="simple-p">
                            Dont forget to checkout my{' '}
                            <CustomLink href="/">Resume</CustomLink>
                        </p>
                    </div>
                    <div className="col-span-1 flex h-full justify-end items-center space-x-32">
                        <div className="grid grid-cols-1 grid-rows-4 gap-px items-end">
                            <p className="simple-p-heading">Sections</p>
                            <CustomLink href="/" className="text-right">Landing</CustomLink>
                            <CustomLink href="/" className="text-right">About</CustomLink>
                            <CustomLink href="/" className="text-right">Skills</CustomLink>
                            <CustomLink href="/" className="text-right">Projects</CustomLink>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-4 gap-px items-end">
                            <p className="simple-p-heading">Contacts</p>
                            <CustomLink href="/" className="text-right">LinkedIn</CustomLink>
                            <CustomLink href="/" className="text-right">Github</CustomLink>
                            <CustomLink href="/" className="text-right">Mail</CustomLink>
                            <CustomLink href="/" className="text-right">WhatsApp</CustomLink>
                        </div>
                    </div>
                </div>
            </CardContent>
            <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className={cn(
                    '[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]'
                )}
            />
        </Card>
    );
};
