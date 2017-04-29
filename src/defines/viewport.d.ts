/**
 * Viewport's component instance info
 */
declare interface InstanceInfo {
    /**
     * Gaea key, use it can find componentClass, and access defaultProps.gaeaSetting
     */
    gaeaKey: string
    /**
     * Component data, all operate save here
     */
    data: any
    /**
     * Children's instanceKey（only isContainer)
     * Component who's property isContainer is false will not have the property
     */
    childs?: string[]
    /**
     * Parent component's instanceKey
     * Root component's parentInstanceKey is null
     */
    parentInstanceKey: string
}
