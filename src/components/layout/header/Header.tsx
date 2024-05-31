import { memo } from 'react'

import { ErrorBoundary } from '~/components/common/ErrorBoundary'
import { ThemeSwitcher } from '~/components/ui/theme-switcher'
import { OnlyMobile } from '~/components/ui/viewport/OnlyMobile'
import { clsxm } from '~/lib/helper'

import { AnimatedLogo } from './internal/AnimatedLogo'
import { BluredBackground } from './internal/BluredBackground'
import styles from './internal/grid.module.css'
import {
  HeaderCenterArea,
  HeaderLeftButtonArea,
  HeaderLogoArea,
} from './internal/HeaderArea'
import { HeaderContent } from './internal/HeaderContent'
import { HeaderDataConfigureProvider } from './internal/HeaderDataConfigureProvider'
import { HeaderDrawerButton } from './internal/HeaderDrawerButton'
import { HeaderMeta } from './internal/HeaderMeta'
import { HeaderWithShadow } from './internal/HeaderWithShadow'

export const Header = () => {
  return (
    <ErrorBoundary>
      <HeaderDataConfigureProvider>
        <MemoedHeader />
      </HeaderDataConfigureProvider>
    </ErrorBoundary>
  )
}
const MemoedHeader = memo(() => {
  return (
    <HeaderWithShadow>
      <BluredBackground />
      <div
        className={clsxm(
          'relative mx-auto grid h-full min-h-0 max-w-7xl grid-cols-[4.5rem_auto_4.5rem] lg:px-8',
          styles['header--grid'],
        )}
      >
        <HeaderLeftButtonArea>
          <HeaderDrawerButton />
        </HeaderLeftButtonArea>

        <HeaderLogoArea>
          <AnimatedLogo />

          <OnlyMobile>
            <HeaderMeta />
          </OnlyMobile>
        </HeaderLogoArea>

        <HeaderCenterArea>
          <HeaderContent />
          <HeaderMeta />
          <ThemeSwitcher />
        </HeaderCenterArea>

        {/* <div className="mt-6 block text-center md:absolute md:bottom-0 md:right-0 md:mt-0">
        </div> */}
      </div>
    </HeaderWithShadow>
  )
})

MemoedHeader.displayName = 'MemoedHeader'
