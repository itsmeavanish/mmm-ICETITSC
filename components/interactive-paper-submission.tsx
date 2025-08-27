"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileText, Upload, CheckCircle, AlertCircle, Users } from "lucide-react"

const submissionSteps = [
  { id: 1, title: "Paper Details", icon: FileText },
  { id: 2, title: "Authors", icon: Users },
  { id: 3, title: "Upload", icon: Upload },
  { id: 4, title: "Review", icon: CheckCircle },
]

const paperTracks = [
  "Artificial Intelligence & Machine Learning",
  "Symbolic Computation",
  "Information Technology",
  "Emerging Technologies",
  "Computer Networks & Security",
  "Software Engineering",
]

export default function InteractivePaperSubmission() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    track: "",
    keywords: "",
    authors: [{ name: "", email: "", affiliation: "" }],
  })

  const progress = (currentStep / submissionSteps.length) * 100

  const addAuthor = () => {
    setFormData({
      ...formData,
      authors: [...formData.authors, { name: "", email: "", affiliation: "" }],
    })
  }

  const removeAuthor = (index: number) => {
    const newAuthors = formData.authors.filter((_, i) => i !== index)
    setFormData({ ...formData, authors: newAuthors })
  }

  const nextStep = () => {
    if (currentStep < submissionSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-6">Submit Your Paper</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your research with the global community. Follow our simple submission process.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            {submissionSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    currentStep >= step.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <span
                  className={`text-sm font-medium ${currentStep >= step.id ? "text-primary" : "text-muted-foreground"}`}
                >
                  {step.title}
                </span>
              </motion.div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form Steps */}
        <Card className="border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {(() => {
                const IconComponent = submissionSteps[currentStep - 1].icon
                return <IconComponent className="w-6 h-6 text-primary" />
              })()}
              Step {currentStep}: {submissionSteps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="title">Paper Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter your paper title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="track">Conference Track *</Label>
                    <Select
                      value={formData.track}
                      onValueChange={(value) => setFormData({ ...formData, track: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a conference track" />
                      </SelectTrigger>
                      <SelectContent>
                        {paperTracks.map((track) => (
                          <SelectItem key={track} value={track}>
                            {track}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="abstract">Abstract *</Label>
                    <Textarea
                      id="abstract"
                      placeholder="Enter your paper abstract (max 300 words)"
                      rows={6}
                      value={formData.abstract}
                      onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    />
                    <p className="text-sm text-muted-foreground">{formData.abstract.split(" ").length}/300 words</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keywords">Keywords *</Label>
                    <Input
                      id="keywords"
                      placeholder="Enter keywords separated by commas"
                      value={formData.keywords}
                      onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.keywords.split(",").map(
                        (keyword, index) =>
                          keyword.trim() && (
                            <Badge key={index} variant="secondary">
                              {keyword.trim()}
                            </Badge>
                          ),
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Author Information</h3>
                    <Button onClick={addAuthor} variant="outline" size="sm">
                      Add Author
                    </Button>
                  </div>

                  {formData.authors.map((author, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 border border-border rounded-lg space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Author {index + 1}</h4>
                        {index > 0 && (
                          <Button onClick={() => removeAuthor(index)} variant="ghost" size="sm">
                            Remove
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Full Name *</Label>
                          <Input
                            placeholder="Enter full name"
                            value={author.name}
                            onChange={(e) => {
                              const newAuthors = [...formData.authors]
                              newAuthors[index].name = e.target.value
                              setFormData({ ...formData, authors: newAuthors })
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Email *</Label>
                          <Input
                            type="email"
                            placeholder="Enter email"
                            value={author.email}
                            onChange={(e) => {
                              const newAuthors = [...formData.authors]
                              newAuthors[index].email = e.target.value
                              setFormData({ ...formData, authors: newAuthors })
                            }}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Affiliation *</Label>
                        <Input
                          placeholder="Enter institution/organization"
                          value={author.affiliation}
                          onChange={(e) => {
                            const newAuthors = [...formData.authors]
                            newAuthors[index].affiliation = e.target.value
                            setFormData({ ...formData, authors: newAuthors })
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Upload className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Upload Your Paper</h3>
                    <p className="text-muted-foreground mb-6">
                      Please upload your paper in PDF format. Maximum file size: 10MB
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Drop your file here or click to browse</p>
                    <p className="text-sm text-muted-foreground">Supported formats: PDF (max 10MB)</p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-2">Submission Guidelines</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Papers should be 6-8 pages in IEEE format</li>
                          <li>• Include all figures and tables</li>
                          <li>• Ensure proper citations and references</li>
                          <li>• Remove author information for blind review</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Review Your Submission</h3>
                    <p className="text-muted-foreground mb-6">
                      Please review all information before submitting your paper
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Paper Details</h4>
                      <p className="text-sm text-muted-foreground">Title: {formData.title || "Not provided"}</p>
                      <p className="text-sm text-muted-foreground">Track: {formData.track || "Not selected"}</p>
                      <p className="text-sm text-muted-foreground">Keywords: {formData.keywords || "Not provided"}</p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Authors ({formData.authors.length})</h4>
                      {formData.authors.map((author, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {author.name || "Name not provided"} - {author.affiliation || "Affiliation not provided"}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="px-8">
                      Submit Paper
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      You will receive a confirmation email after submission
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button onClick={prevStep} disabled={currentStep === 1} variant="outline">
                Previous
              </Button>
              <Button onClick={nextStep} disabled={currentStep === submissionSteps.length}>
                {currentStep === submissionSteps.length ? "Submit" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
