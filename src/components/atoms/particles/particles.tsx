import { PureComponent } from 'react'
import dynamic from 'next/dynamic'
import { DivType } from 'react-tsparticles'
import omit from 'lodash/omit'
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
          type: ['images'],
          image: [
            {
              src: '/images/android-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/apollo-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/aws-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/app-store-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/babel-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/css3-alt-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/chakra-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/docker-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/eslint-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/flow-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/github-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/google-play-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/graphql-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/hapi.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/html5-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/jest-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/less-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/lodash-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/material-brands.svg',
              height: 250,
              width: 1000,
              replaceColor: true,
            },
            {
              src: '/images/mongodb.svg',
              height: 250,
              width: 1000,
              replaceColor: true,
            },
            {
              src: '/images/nextjs-brands.svg',
              height: 250,
              width: 1000,
              replaceColor: true,
            },
            {
              src: '/images/node-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/node-js-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/php-brands.svg',
              height: 20,
              width: 20,
              replaceColor: true,
            },
            {
              src: '/images/react-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/ts-brands.svg',
              height: 20,
              width: 20,
              replaceColor: true,
            },
            {
              src: '/images/sass-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/storybook-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/ubuntu-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
            {
              src: '/images/vscode-brands.svg',
              height: 20,
              width: 20,
              replaceColor: true,
            },
            {
              src: '/images/webpack-brands.svg',
              height: 20,
              width: 20,
              replaceColor: true,
            },
            {
              src: '/images/xd-brands.svg',
              height: 20,
              width: 20,
              replaceColor: true,
            },
            {
              src: '/images/yarn-brands.svg',
              height: 40,
              width: 40,
              replaceColor: true,
            },
          ],
        },
        links: {
          enable: false,
        },
        number: {
          density: {
            enable: true,
            factor: 1000,
            area: 1200,
          },
          limit: 50,
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
