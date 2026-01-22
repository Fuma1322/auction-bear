"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type SellerType = "dealer" | "private"

export default function SellForm() {
  const [step, setStep] = useState<1 | 2>(1)
  const [sellerType, setSellerType] = useState<SellerType | null>(null)

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Tell us about your car
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 ? "Your info" : "Photos & documents"}
          </CardTitle>
          <CardDescription>
            {step === 1
              ? "Tell us about the vehicle."
              : "Upload photos, documents and agree to terms."}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {step === 1 && (
            <StepOne
              sellerType={sellerType}
              setSellerType={setSellerType}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <StepTwo
              onBack={() => setStep(1)}
            />
          )}
        </CardContent>
      </Card>
    </section>
  )
}
function StepOne({
  sellerType,
  setSellerType,
  onNext,
}: {
  sellerType: SellerType | null
  setSellerType: (v: SellerType) => void
  onNext: () => void
}) {
  return (
    <div className="space-y-8">
      {/* SELLER TYPE */}
      <div className="space-y-3">
        <Label>Dealer or private party?</Label>
        <div className="flex gap-4">
          <Button
            variant={sellerType === "dealer" ? "default" : "outline"}
            onClick={() => setSellerType("dealer")}
            type="button"
          >
            Dealer
          </Button>
          <Button
            variant={sellerType === "private" ? "default" : "outline"}
            onClick={() => setSellerType("private")}
            type="button"
          >
            Private party
          </Button>
        </div>
      </div>

      {/* CONDITIONAL SELLER FORM */}
      {sellerType === "dealer" && (
        <div className="grid gap-4">
          <Input placeholder="Dealer name" />
          <Input placeholder="Dealer contact email" />
          <Input type="file" />
          <p className="text-sm text-muted-foreground">
            Upload your dealer license
          </p>
        </div>
      )}

      {sellerType === "private" && (
        <div className="grid gap-4">
          <Input placeholder="Full name" />
          <Input placeholder="Phone or email" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Text me about my submission?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* CAR DETAILS */}
      <div className="grid gap-4 pt-6">
        <h3 className="font-semibold">Car details</h3>

        <Input placeholder="VIN number" />
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Year" />
          <Input placeholder="Mileage" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Make" />
          <Input placeholder="Model" />
        </div>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Transmission" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="automatic">Automatic</SelectItem>
          </SelectContent>
        </Select>

        <Textarea placeholder="Special options" />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Has your car been modified?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>

        <Textarea placeholder="Any mechanical or cosmetic flaws?" />
        <Input placeholder="Car location (City, Country)" />
      </div>

      <Button className="w-full bg-gray-950 hover:bg-gray-900 text-white font-bold" onClick={onNext}>
        Continue to uploads
      </Button>
    </div>
  )
}

function StepTwo({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <Label>Car photos</Label>
        <Input type="file" multiple />
      </div>

      <div className="grid gap-4">
        <Label>Car documents</Label>
        <Input type="file" multiple />
      </div>

      <div className="flex items-start gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-sm">
          I agree to the terms and conditions
        </Label>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button className="flex-1 bg-gray-950 hover:bg-gray-900 text-white font-bold">
          Submit listing
        </Button>
      </div>
    </div>
  )
}