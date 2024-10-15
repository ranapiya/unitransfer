import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function SelectBar() {
    return (
        <Select>
            <SelectTrigger className="w-[220px] h-[60px] bg-gradient-to-r from-[#10122e] to-[#1c2056] text-white rounded-full flex items-center justify-between px-4 shadow-lg">
                <div className="flex items-center">
                    {/* Placeholder or Selected Token */}
                    <SelectValue placeholder="Select Token"  />
                </div>
                <div className="text-sm text-gray-400">$1.00</div>  {/* Add a default value */}
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="USDC">USDC</SelectItem>
                    <SelectItem value="ASTRO">ASTRO</SelectItem>
                    <SelectItem value="BTC">BTC</SelectItem>
                    <SelectItem value="ETH">ETH</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
