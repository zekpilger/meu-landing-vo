"use client"
/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Shield,
  Clock,
  Users,
  Eye,
  DollarSign,
  Star,
  Lock,
  ArrowDown,
  Zap,
  Target,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PrimeiraVendaOptimized() {
  const [viewersCount, setViewersCount] = useState(847)
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 23,
    seconds: 45,
  })

  useEffect(() => {
    // Simular variação de viewers
    const viewerTimer = setInterval(() => {
      setViewersCount((prev) => prev + Math.floor(Math.random() * 3) - 1)
    }, 3000)

    // Timer countdown
    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => {
      clearInterval(viewerTimer)
      clearInterval(countdownTimer)
    }
  }, [])

  const handleCTA = () => {
    window.open("https://checkout.exemplo.com/primeira-venda-24h", "_blank")
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Barra de Urgência Superior */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 text-center text-sm font-bold relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="relative z-10">
          🔥 OFERTA RELÂMPAGO: Termina em {timeLeft.hours.toString().padStart(2, "0")}:
          {timeLeft.minutes.toString().padStart(2, "0")}:{timeLeft.seconds.toString().padStart(2, "0")} • Últimas{" "}
          {Math.max(50 - Math.floor(viewersCount / 20), 12)} vagas!
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background com gradiente e textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lado Esquerdo - Conteúdo */}
            <div className="space-y-8">
              {/* Logo/Marca */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-black text-white">PRIMEIRA VENDA</h1>
                  <p className="text-orange-400 font-bold text-lg">EM 24 HORAS</p>
                </div>
              </div>

              {/* Badge de Credibilidade */}
              <Badge className="bg-green-600/20 text-green-400 border-green-500/30 text-base px-4 py-2">
                ✅ +15.000 ALUNOS JÁ VENDERAM
              </Badge>

              {/* Headline Principal */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  VOU MUDAR SUA
                  <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    REALIDADE!
                  </span>
                </h2>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-300">
                  Sua primeira venda em 24h ou
                  <span className="text-orange-400"> seu dinheiro de volta!</span>
                </h3>
              </div>

              {/* Prova Social em Tempo Real */}
              <div className="flex items-center space-x-4 bg-white/5 rounded-lg p-4 border border-orange-500/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <Eye className="h-5 w-5 text-orange-400" />
                </div>
                <span className="text-white font-semibold">
                  <span className="text-orange-400 font-bold">{viewersCount}</span> pessoas assistindo agora
                </span>
              </div>

              {/* CTA Principal */}
              <div className="space-y-4">
                <Button
                  onClick={handleCTA}
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-xl py-8 font-black shadow-2xl transform hover:scale-105 transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 flex items-center justify-center">🚀 COMECE AGORA MESMO!</span>
                </Button>

                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-green-400 mr-2" />
                    Garantia 24h
                  </div>
                  <div className="flex items-center">
                    <Lock className="h-4 w-4 text-green-400 mr-2" />
                    Acesso imediato
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-green-400 mr-2" />
                    Resultados em 24h
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Imagem Hero */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Sucesso Financeiro"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />

                {/* Overlay com estatísticas */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-400">24h</div>
                      <div className="text-xs text-gray-300">Primeira Venda</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">100%</div>
                      <div className="text-xs text-gray-300">Garantia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Seta para baixo */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-orange-400" />
          </div>
        </div>
      </section>

      {/* Seção de Prova Social */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              🏆 RESULTADOS <span className="text-orange-400">COMPROVADOS</span>
            </h3>
            <p className="text-gray-300 text-lg">Veja o que nossos alunos estão conquistando</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "15.247", label: "Alunos Ativos", icon: <Users className="h-6 w-6" /> },
              { number: "R$ 2.8M", label: "Faturamento Gerado", icon: <DollarSign className="h-6 w-6" /> },
              { number: "24h", label: "Primeira Venda", icon: <Clock className="h-6 w-6" /> },
              { number: "98%", label: "Taxa de Sucesso", icon: <Target className="h-6 w-6" /> },
            ].map((stat, index) => (
              <Card key={index} className="bg-white/5 border-orange-500/20 text-center">
                <CardContent className="p-6">
                  <div className="text-orange-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção do Método */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30 text-lg px-4 py-2">
              🎯 MÉTODO EXCLUSIVO
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Como Você Vai Fazer Sua
              <span className="block text-orange-400">PRIMEIRA VENDA EM 24H</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Escolha Seu Nicho",
                description: "Descubra os nichos mais lucrativos e com menor concorrência para começar hoje mesmo",
                icon: <Target className="h-8 w-8" />,
              },
              {
                step: "02",
                title: "Configure Tudo",
                description: "Siga o passo a passo para configurar suas ferramentas e começar a vender em minutos",
                icon: <Zap className="h-8 w-8" />,
              },
              {
                step: "03",
                title: "Primeira Venda",
                description: "Aplique as estratégias testadas e faça sua primeira venda nas próximas 24 horas",
                icon: <DollarSign className="h-8 w-8" />,
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 border-orange-500/20 relative overflow-hidden group hover:border-orange-500/50 transition-all"
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-orange-500/10 group-hover:text-orange-500/20 transition-colors">
                  {step.step}
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gradient-to-r from-orange-900/10 to-red-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              💬 O Que Dizem Nossos <span className="text-orange-400">ALUNOS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Carlos Mendes",
                result: "R$ 1.247 em 18h",
                content:
                  "Não acreditava que ia funcionar tão rápido! Fiz minha primeira venda em 18 horas seguindo exatamente o método.",
                avatar: "/placeholder.svg?height=60&width=60",
                rating: 5,
              },
              {
                name: "Juliana Santos",
                result: "R$ 2.890 na primeira semana",
                content: "Estava desempregada e em uma semana já tinha faturado quase 3 mil reais. Método incrível!",
                avatar: "/placeholder.svg?height=60&width=60",
                rating: 5,
              },
              {
                name: "Roberto Silva",
                result: "R$ 5.670 no primeiro mês",
                content:
                  "Superou todas as minhas expectativas. No primeiro mês já estava ganhando mais que meu salário anterior.",
                avatar: "/placeholder.svg?height=60&width=60",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-orange-500/20 hover:border-orange-500/40 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
    &quot;{testimonial.content}&quot;
  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="text-white font-bold">{testimonial.name}</p>
                      <p className="text-orange-400 font-bold text-sm">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Principal */}
      <section className="py-20 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 text-white text-lg px-6 py-3">🔥 OFERTA LIMITADA</Badge>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              GARANTE SUA VAGA
              <span className="block text-orange-400">AGORA MESMO!</span>
            </h2>

            <div className="bg-black/50 rounded-3xl p-8 mb-8 border-2 border-orange-500/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">🎁 VOCÊ VAI RECEBER:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Método Primeira Venda 24h Completo
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      15 Vídeo-aulas Passo a Passo
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Templates e Scripts Prontos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Suporte VIP por 30 dias
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Garantia de 24h ou dinheiro de volta
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-gray-400 text-lg line-through">De R$ 497</span>
                  </div>
                  <div className="text-6xl font-black text-orange-400 mb-2">R$ 97</div>
                  <div className="text-gray-300 mb-6">ou 12x de R$ 9,70</div>

                  <Button
                    onClick={handleCTA}
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-xl py-6 font-black shadow-2xl transform hover:scale-105 transition-all"
                  >
                    💳 GARANTIR MINHA VAGA AGORA
                  </Button>

                  <p className="text-red-400 text-sm mt-4 font-bold">
                    ⚠️ Restam apenas {Math.max(50 - Math.floor(viewersCount / 20), 8)} vagas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-green-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">🛡️ GARANTIA BLINDADA DE 24 HORAS</h3>

            <p className="text-xl text-gray-300 mb-6">
              Se você não fizer sua primeira venda em 24 horas seguindo nosso método, devolvemos{" "}
              <span className="text-green-400 font-bold">100% do seu dinheiro</span> sem perguntas!
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Reembolso total
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Sem burocracia
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Risco zero
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              ❓ Perguntas <span className="text-orange-400">Frequentes</span>
            </h3>

            <div className="space-y-6">
              {[
                {
                  q: "Realmente funciona em 24 horas?",
                  a: "Sim! Nosso método foi testado com mais de 15.000 alunos e 98% fazem a primeira venda em até 24h.",
                },
                {
                  q: "Preciso de dinheiro para investir?",
                  a: "Não! O método funciona com ferramentas 100% gratuitas. Você só precisa do seu celular.",
                },
                {
                  q: "E se eu não conseguir vender?",
                  a: "Garantia total! Se não vender em 24h, devolvemos 100% do seu dinheiro.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-white/5 border-orange-500/20">
                  <CardContent className="p-6">
                    <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                    <p className="text-gray-300">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">⏰ ÚLTIMA CHANCE!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Não perca a oportunidade de mudar sua vida financeira nas próximas 24 horas
          </p>

          <Button
            onClick={handleCTA}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-2xl px-12 py-8 font-black shadow-2xl transform hover:scale-105 transition-all"
          >
            🚀 SIM, EU QUERO MUDAR MINHA VIDA!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">© 2024 Primeira Venda 24h - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
