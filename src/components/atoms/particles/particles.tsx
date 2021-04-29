import { PureComponent } from 'react'
import dynamic from 'next/dynamic'
import { DivType } from 'react-tsparticles'
import omit from 'lodash/omit'
import ImagesConfig from '@/config/bg-images'
import type { ISourceOptions } from 'react-tsparticles'

// TODO: use proper IParticlesProps when fixed by author (currently 'any')
// import type { IParticlesProps } from 'react-tsparticles'

const ParticlesBase = dynamic(() => import('react-tsparticles'), {
  ssr: false,
})

export interface Props {
  avoidSelectors?: string[]
  loaded?: () => void | Promise<void>
}

export class Particles extends PureComponent<Props> {
  getOptions(): ISourceOptions {
    return {
      detectRetina: true,
      fpsLimit: 60,
      motion: {
        reduce: {
          factor: 4,
        },
      },
      particles: {
        shape: {
          type: 'images',
          image: ImagesConfig.map((data) => ({
            ...data,
            replaceColor: true,
          })),
        },
        links: {
          enable: false,
        },
        number: {
          density: {
            enable: true,
            factor: 1000,
            area: 2000,
          },
          limit: 40,
        },
        color: {
          value: '#fff',
          animation: {
            enable: true,
            speed: 50,
            sync: true,
          },
        },
        move: {
          enable: true,
          direction: 'top',
          outModes: 'out',
          random: false,
          speed: 3,
          straight: false,
        },
        size: {
          value: 45,
          animation: {
            enable: true,
            minimumValue: 10,
            speed: 10,
            startValue: 'random',
          },
        },
        opacity: {
          animation: {
            enable: false,
          },
        },
        reduceDuplicates: true,
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: false,
            mode: 'bubble',
            parallax: {
              enable: false,
              force: 20,
              smooth: 100,
            },
          },
          onDiv: {
            selectors: this.props.avoidSelectors ?? [],
            enable: true,
            mode: 'bounce',
            type: DivType.rectangle,
          },
        },
      },
      fullScreen: {
        enable: true,
      },
      pauseOnBlur: true,
    }
  }

  render(): React.ReactNode {
    if (!ParticlesBase) return null
    const props = omit(this.props, ['avoidSelectors'])

    return <ParticlesBase options={this.getOptions()} {...props} />
  }
}
